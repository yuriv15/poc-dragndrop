<template>
    <q-card :id="id" class="board" flat @dragover.prevent @drop.prevent="drop">
        <slot />
    </q-card>
</template>

<script setup lang="ts">
const props = defineProps<{
    id: string;
}>();

function drop(e: DragEvent) {
    const card_id = e.dataTransfer?.getData('card_id') as string;
    const card = document.getElementById(card_id) as HTMLElement;
    card.style.display = 'block';
    const target = e.target as HTMLElement;
    target.appendChild(card);
}
</script>

<style lang="scss" scoped>
.board {
    background-color: $grey-2;
    min-height: 20%;
    width: 500px;
}
</style>
