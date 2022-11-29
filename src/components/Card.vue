<template>
    <div
        class="list-item"
        :draggable="draggable"
        @dragstart="dragStart"
        @dragover.stop
        :id="id"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    draggable: { default: true, type: Boolean },
    id: { String, required: true },
});

// just testing

function dragStart(e: DragEvent) {
    const target = e.target as HTMLElement;

    e.dataTransfer?.setData('card_id', target.id);

    setTimeout(() => {
        target.style.display = 'none';
    }, 0);
}
</script>

<style lang="scss" scoped>
.list-item {
    box-sizing: border-box;
    width: available;
    margin: 10px 50px;
    text-align: center;
    background-color: $primary;
    color: white;
    padding: 10px 0;
    user-select: none;
}
</style>
