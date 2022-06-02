<script setup>
import { ref } from 'vue'
</script>

<template>
    <div >
        <nav class="menu">
            <ul class="grid grid-cols-4 gap-4">
                <li ><a href="">Burger</a><center><img src="https://picsum.photos/50"></center></li>
                <li><a href="">Pizza</a><center><img src="https://picsum.photos/50"></center></li>
                <li><a href="">Italien</a><center><img src="https://picsum.photos/50"></center></li>
                <li><a href="">aide</a><center><img src="https://picsum.photos/50"></center></li>
            </ul>
        </nav>
    </div>
</template>

<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

li {
    float: left;
}

li a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
}
</style>