<template>
    <li class="item" :class="{switching: item.isSwitching}" :style="styleObject" >
        <span class="value">{{item.value}}</span>
    </li>
</template>

<script>
export default {
    data: function(){
        return {
            distance: 0
        };
    },
    props: {
        item: Object
    },
    computed: {
        styleObject: function(){
            return {
                height: this.item.value * 0.9 + '%',
                left: this.item.index * 30 + 'px',
                transition: 'left ' + 0.1 * this.distance + 's'
            };
        }
    }
}
</script>

<style>
.item {
    position: absolute;
    bottom: 0;
    width: 20px;
    list-style: none;
    background: #ccc;
    transition: left 0.8s;
    color: #fff;
}
.item .value {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translate3D(-50%, 0, 0);
}
.switching {
    background: #f60;
}
</style>
