<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">julio</span>
            <span class="mx-2 fs-4 fw-light">2023</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary mx-2">
                Subir Foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Que sucedio hoy compa?"></textarea>
    </div>
    <img class="img-thumbnail" src="https://i.pinimg.com/564x/5c/f1/8d/5cf18d4da867178e1d002a42dcb9a2f0.jpg">
    <FAB icon="fa-save" />
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        FAB: defineAsyncComponent(() => import('../components/FAB.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 100px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>