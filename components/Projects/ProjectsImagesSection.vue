<template>
    <section class="SuppliersBrandsSection">
        <div class="max-w-[1392px] mx-auto max-xl:px-6">
            <div class="flex max-lg:flex-col gap-2 md:gap-4 lg:gap-6">
                <div class="w-full lg:w-1/2 imgContainer max-h-[584px]">
                    <img src="~/assets/img/Projects/haramTower.webp" class="h-full max-h-full object-cover w-full "
                        alt="haramTower">
                </div>
                <div class="flex flex-col w-full lg:w-1/2 gap-2 md:gap-4 lg:gap-6">
                    <div class="h-1/2 imgContainer bg-red-500">
                        <img src="~/assets/img/Projects/Economic City.webp" class="w-full h-full object-cover"
                            alt="Abraj Al Bait Towers - Day">
                    </div>
                    <div class="flex gap-2 md:gap-4 lg:gap-6 h-1/2 ">
                        <div class="imgContainer  w-1/2">
                            <img src="~/assets/img/Projects/AMAALA L.webp" class="w-full h-full max-w-full object-cover"
                                alt="Traditional Mud-Brick Village">
                        </div>
                        <div class="imgContainer  w-1/2">
                            <img src="~/assets/img/Projects/Salman Park L.webp"
                                class="w-full h-full max-w-full object-cover" alt="Traditional Architecture">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex max-lg:flex-col gap-2 md:gap-4 lg:gap-6 flex-row-reverse mt-2 md:mt-4 lg:mt-6 ">
                <div class="w-full lg:w-1/2 imgContainer max-h-[280px]">
                    <img src="~/assets/img/Projects/NEOM.webp" class="object-cover w-full h-full" alt="NEOM">
                </div>
                <div class="flex gap-2 md:gap-4 lg:gap-6 w-full lg:w-1/2 ">
                    <div class="imgContainer  w-1/2">
                        <img src="~/assets/img/Projects/Red Sea L.webp" class="object-cover w-full h-full"
                            alt="Red Sea ">
                    </div>
                    <div class="imgContainer  w-1/2">
                        <img src="~/assets/img/Projects/King Saud L.webp" class="object-cover w-full h-full"
                            alt="King Saud ">
                    </div>
                </div>
            </div>
            <div class="flex max-lg:flex-col gap-2 md:gap-4 lg:gap-6 flex-row-reverse mt-2 md:mt-4 lg:mt-6">
                <div class="w-full lg:w-1/2 imgContainer">
                    <img src="~/assets/img/Projects/University of Science L.webp"
                        class="object-cover w-full max-w-full max-h-full block" alt="University of Science ">
                </div>
                <div class="flex flex-col w-full lg:w-1/2 gap-2 md:gap-4 lg:gap-6">
                    <div class="h-1/2 imgContainer ">
                        <img src="~/assets/img/Projects/Jabal Omar.webp" class="w-full object-cover"
                            alt="Abraj Al Bait Towers - Day">
                    </div>
                    <div class="flex gap-2 md:gap-4 lg:gap-6 h-1/2 ">
                        <div class="imgContainer  w-1/2">
                            <img src="~/assets/img/Projects/ALULA L.webp" class="w-full max-w-full object-cover"
                                alt="ALULA L">
                        </div>
                        <div class="imgContainer  w-1/2">
                            <img src="~/assets/img/Projects/MASAAR L.webp" class="w-full max-w-full object-cover"
                                alt="MASAAR ">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex max-lg:flex-col gap-2 md:gap-4 lg:gap-6 flex-row-reverse mt-2 md:mt-4 lg:mt-6 ">
                <div class="w-full lg:w-1/2 imgContainer max-h-[280px]">
                    <img src="~/assets/img/Projects/King Abdullah.webp" class="object-cover w-full h-full"
                        alt="King Abdullah">
                </div>
                <div class="flex gap-2 md:gap-4 lg:gap-6 w-full lg:w-1/2 ">
                    <div class="imgContainer  w-1/2 max-h-[280px]">
                        <img src="~/assets/img/Projects/Qiddiyah L.webp" class="object-cover w-full h-full"
                            alt="Qiddiyah">
                    </div>
                    <div class="imgContainer  w-1/2 max-h-[280px]">
                        <img src="~/assets/img/Projects/Amazon.webp" class="object-cover w-full h-full" alt="Amazon">
                    </div>
                </div>
            </div>
            <div class="flex max-lg:flex-col gap-2 md:gap-4 lg:gap-6 flex-row-reverse mt-2 md:mt-4 lg:mt-6">
                <div class="w-full lg:w-1/2 imgContainer">
                    <img src="~/assets/img/Projects/King Khalid L.webp"
                        class="object-fill w-full max-w-full max-h-full block" alt="King Khalid">
                </div>
                <div class="flex flex-col w-full lg:w-1/2 gap-2 md:gap-4 lg:gap-6">
                    <div class="h-1/2 imgContainer ">
                        <img src="~/assets/img/Projects/Endowment.webp" class="w-full object-cover" alt="Endowment">
                    </div>
                    <div class="flex gap-2 md:gap-4 lg:gap-6 h-1/2 ">
                        <div class="imgContainer  w-1/2">
                            <img src="~/assets/img/Projects/Diriyah Gate L.webp" class="w-full max-w-full object-cover"
                                alt="Diriyah Gate ">
                        </div>
                        <div class="imgContainer  w-1/2">
                            <img src="~/assets/img/Projects/Makkah Clock L.webp" class="w-full max-w-full object-cover"
                                alt="Makkah Clock ">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.imgContainer {
    overflow: hidden;
    border-radius: 16px;
    cursor: pointer;
}

.imgContainer img {
    border-radius: 16px;
    transition: 0.2s ease-in-out;
}

.imgContainer:hover img {
    transform: scale(1.15);
}

@media (max-width:768px) {

    .imgContainer,
    .imgContainer img {
        border-radius: 12px;
    }
}
</style>