<template>
    <section>
        <div class="sub-menu">
            <div>
                <p>Home Page</p>
                <ul>
                    <li>Navigation Bar</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <p></p>
                <ul>
                    <li></li>
                    <li></li>
                </ul>                
            </div>
            <div>
                <p></p>
                <ul>
                    <li></li>
                </ul>
            </div>

        </div>
        <div class="copy">&copy;Waydin Jochem {{ new Date().getFullYear() }}</div>
    </section>
</template>
<script>
export default {

}
</script>
<style scoped>
section {
    background-color: black;
    margin-top: 20px;
}

.sub-menu {
    display: grid;
    grid-template-columns: auto auto auto auto;
}

.copy {
    background-color: aliceblue;
}
</style>