Vue.component("simple_cta_component_1723702133", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto lg:py-16 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">Discover the Latest in Blockchain</h2>
                </div>
                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-100 md:text-lg">Stay ahead of the curve with real-time updates on emerging blockchain technologies, projects, and trends.</p>
                </div>
                <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Blockchain_Information_Finder_1723702131/main/images/ef3071c99a88418fa5efe21c0c3b4d4f.jpeg" alt="Blockchain Image" class="mb-6" />
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white bg-opacity-80 hover:bg-opacity-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">Explore Blockchain Now</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});