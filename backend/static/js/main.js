document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");

            line1.classList.toggle("rotate-45");
            line1.classList.toggle("translate-y-[6px]");
            line2.classList.toggle("opacity-0");
            line3.classList.toggle("-rotate-45");
            line3.classList.toggle("-translate-y-[6px]");
        });
    }
});