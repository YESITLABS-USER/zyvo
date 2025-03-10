

const LocationReviewStars = ({ rating }) => {
    const maxStars = 5;
    const safeRating = Math.min(Math.max(Math.round(parseFloat(rating)), 0), maxStars); // Clamp between 0 and 5
    const filledStars = safeRating; // Convert string to number and round it
    const emptyStars = maxStars - filledStars;

    return (
        <div className="location-reviews-list-right-star">
            {/* Render filled stars */}
            {[...Array(filledStars)].map((_, index) => (
                <img
                    key={`filled-${index}`}
                    src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                    alt="Filled Star"
                />
            ))}

            {/* Render empty stars */}
            {[...Array(emptyStars)].map((_, index) => (
                <img
                    key={`empty-${index}`}
                    src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon-blank.svg"
                    alt="Empty Star"
                />
            ))}
        </div>
    );
};

export default LocationReviewStars;