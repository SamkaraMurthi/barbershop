var portfolio1 = 0;
        var portfolio2 = 0;

        function togglePortfolioSelection(element, portfolioVariable) {
            // Toggle the 'selected' class on the clicked portfolio
            element.classList.toggle('selected');

            // Update the corresponding portfolio variable based on selection
            if (portfolioVariable === 'portfolio1') {
                portfolio1 = (portfolio1 === 0) ? 1 : 0;
            } else if (portfolioVariable === 'portfolio2') {
                portfolio2 = (portfolio2 === 0) ? 1 : 0;
            }
        }

        function addToCart() {
            // Use the portfolio variables as needed
            console.log('Portfolio 1:', portfolio1);
            console.log('Portfolio 2:', portfolio2);
            
            window.location.href = 'chart.html';

            // You can perform other actions here based on the selected portfolios
        }