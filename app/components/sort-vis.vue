<template>
<div class="sort-vis">
    <ul>
        <li is="sort-item" v-for="item in array" :item="item"></li>
    </ul>
</div>
</template>

<script>
import SortItem from './sort-item';

export default {
    props: ['array'],
    components: {
        SortItem
    }
}
</script>

<style>
.sort-vis {
    position: relative;
    overflow: hidden;
    height: 90%;
}
</style>
