
/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723702133", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-400 to-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10 rounded-lg shadow-lg">
                <hr id="footer-divider" class="my-6 border-pink-300 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition-colors duration-300">
                            <img id="footer-logo" src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Blockchain_Information_Finder_1723702131/main/images/7559daf0cffa415a8ca4892b876001d8.jpeg" class="h-6 mr-3 sm:h-9 filter brightness-0 invert" alt="Landwind Logo" />
                            BlockchainInsight Explorer
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-white">
                        © 2023 BlockchainInsight Explorer. Empowering users with real-time blockchain data and insights.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
