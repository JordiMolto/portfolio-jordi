<template>
    <div class="contenedor">
        <h2>{{ tituloSeccionSkills }}</h2>
        <div class="fila">
            <div v-for="item in skillsApps" :key="item">
                <div v-for="i in item" :key="i" class="c-skills">
                    <img :src="i.logo" alt="logo-app">
                    <span class="tooltiptext">{{ i.texto }}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import skillsApps from "../../js/skills";
import '../skill-box/skill-box.scss';

export default {
    name: "SkillBox",
    emits: [],
    components: {},
    props: {
        tituloSeccionSkills: {
            type: String,
            default: "Mis skills y cosas que sé hacer"
        }
    },
    setup() {
        return { skillsApps };
    }
}
</script>