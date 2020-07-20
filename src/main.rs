mod filters;
use react_ssr;
use warp;

// TODO: replace tokio with smol.
#[tokio::main]
async fn main() {
    react_ssr::initialize();

    let filters = filters::get_all_filters();
    warp::serve(filters).run(([0, 0, 0, 0], 3030)).await;
}
