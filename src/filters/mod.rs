mod react;

use warp::{Filter, Rejection, Reply};

pub fn get_all_filters() -> impl warp::Filter<Extract = impl Reply, Error = Rejection> + Clone {
    let react_filters = react::get_filters();
    let x = warp::path::end().map(|| format!("hello word"));

    let filters = react_filters.or(x);
    filters
}
