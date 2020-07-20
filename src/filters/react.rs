use react_ssr::ReactSSR;
use tokio::fs::read_to_string;
use warp::{Filter, Rejection, Reply};

// Clone constraint is needed as warp::serve needs this constraint.
pub fn get_filters() -> impl Filter<Extract = impl Reply, Error = Rejection> + Clone {
    let get_endpoints = warp::get();

    let filter = warp::path!("react").and_then(ssr_react); // map(|| String::from("React page"));

    let filters = get_endpoints.and(filter);

    filters
}

async fn ssr_react() -> Result<String, Rejection> {
    let source = match read_to_string("FE/dist/main.js").await {
        Ok(file) => file,
        Err(_) => return Err(warp::reject::reject()),
    };
    let mut ssr = ReactSSR::new(&source);
    let x = ssr
        .render_to_string::<()>(None)
        .ok_or_else(|| warp::reject::reject());
    x
}
