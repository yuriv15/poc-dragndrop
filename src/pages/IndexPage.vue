<template>
    <q-page>
        <main class="page-cnt">
            <Board v-for="board in boards" :key="board.id" :id="board.id">
                <Card v-for="item in board.items" :key="item.id" :id="item.id">
                    {{ item.label }}
                </Card>
            </Board>
        </main>
    </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { uid } from 'quasar';
import Board from 'components/Board.vue';
import Card from 'components/Card.vue';
import { IListItem } from 'src/interfaces/listItem.interface';
import { IBoard } from 'src/interfaces/board.interface';

const list1 = ref<IListItem[]>([
    { id: uid(), label: 'Item 1' },
    { id: uid(), label: 'Item 2' },
]);
const list2 = ref<IListItem[]>([{ id: uid(), label: 'Item 3' }]);

const board1 = ref<IBoard>({ id: uid(), items: list1.value });

const board2 = ref<IBoard>({ id: uid(), items: list2.value });

const boards = ref<IBoard[]>([board1.value, board2.value]);
</script>

<style lang="scss" scoped>
.page-cnt {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
}
</style>
