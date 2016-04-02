<template>
<sort-vis :array="array"></sort-vis>
</template>

<script>
import SortVis from './components/sort-vis';

var getRandomArray = function(size, max){
    var ret = [],
        index = 0;

    while(size--){
        var value = Math.floor(Math.random() * max + 1);

        ret.push({
            index: index,
            value: value,
            sortValue: value,
            isSwitching: false
        });

        index++;
    }

    return ret;
};

export default {
    data: function(){
        return {
            array: getRandomArray(50, 100)
        };
    },
    components: {
        SortVis
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}
html, body {
    height: 100%;
    margin: 0;
    padding: 20px;
    background: #333;
    font-family: "微软雅黑";
}
</style>

