import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export class RestaurantsListPage extends Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;

    loadRestaurants();
  }

  render() {
    const { restaurantsListData } = this.props;

    return (
      <div className="restaurants-list">
        {restaurantsListData.map((restaurant) => {
          const {
            uuid,
            title,
            heroImageUrl,
            categories,
            etaRange,
          } = restaurant;

          return (
            <RestaurantCard
              key={uuid}
              uuid={uuid}
              title={title}
              imageUrl={heroImageUrl}
              categories={categories}
              etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
            />
          );
        })}
      </div>
    );
  }
}

RestaurantsListPage.propTypes = {
  restaurantsListData: PropTypes.arrayOf(PropTypes.shape({})),
  loadRestaurants: PropTypes.func.isRequired,
};

RestaurantsListPage.defaultProps = {
  restaurantsListData: [],
};
