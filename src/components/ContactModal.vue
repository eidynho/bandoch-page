<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import behanceLogo from '../assets/behanceLogo.svg'
import instagramLogo from '../assets/instagramLogo.svg'
import linkedinLogo from '../assets/linkedinLogo.svg'
import closebtnImg from '../assets/closeImage.svg'

export default {
    data() {
        return {
            instagramLogo,
            behanceLogo,
            linkedinLogo,
            closebtnImg,
            
            showContactModal: false,
        }
    },

    methods: {
        toggleModal(openModal) {
            this.showContactModal = openModal

            gsap.registerPlugin(ScrollTrigger)
            
            gsap.fromTo('.modalComponent', {
                y: 50,
                opacity: 0,
            }, { 
                y: 0,
                duration: 0.4,
                opacity: 0.990,
            })
        }
    },
}

</script>


<template>
    <section v-show="showContactModal" @click="toggleModal(false)" class="z-10 w-full h-full flex items-center justify-center fixed top-0 left-0 overflow-y-auto bg-black bg-opacity-50">
        <div class="modalComponent" @click="e => e.stopPropagation()">
            <div class="h-full flex flex-col">
                <div class="flex justify-around mt-10">
                    <h3 class="text-2xl w-56">Contato</h3>
                    <img :src=closebtnImg @click="toggleModal(false)" alt="close-button" class="w-6 cursor-pointer" />
                </div>

                <div class="flex flex-col justify-center gap-3 mx-auto w-60 h-[260px]">
                    <div class="flex items-center gap-3">
                        <img :src="behanceLogo" alt="behance-logo" class="w-[28px]">
                        <a href="https://www.behance.net/miguelbandoch" target="_blank" rel="noopener noreferrer">/miguelbandoch</a>
                    </div>
                    <div class="flex items-center gap-3">
                        <img :src="linkedinLogo" alt="linkedin-logo" class="w-[26px]">
                        <a href="https://www.linkedin.com/in/miguel-bandoch-7269a518a/" target="_blank" rel="noopener noreferrer">/miguelbandoch</a>
                    </div>
                    <div class="flex items-center gap-3">
                        <img :src="instagramLogo" alt="instagram-logo" class="w-[26px]">
                        <a href="https://www.instagram.com/bandochh/" target="_blank" rel="noopener noreferrer">/bandochh</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.modalComponent {
    position: relative;
    width: 400px;
    max-width: 90%;
    height: 380px;
    border-radius: 24px;
    
    margin: auto;
    background-color: #121214;
    color: #FDFDFD;

    /* background-image: url(${formImage}); */
    background-position: top top;
    background-size: 220px;
    background-repeat: no-repeat;
}

.modalComponent {
    a {
        transition: all 0.2s ease;
    
        &:hover {
            color: #8bc4e6;
        }
    }

    img {
        filter: invert(100%) sepia(0%) saturate(7485%) hue-rotate(244deg) brightness(103%) contrast(92%);
    }
}

</style>
