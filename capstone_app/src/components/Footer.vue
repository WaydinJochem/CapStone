<template>
    <section class="pt-3">
        <div class="sub-menu">
            <div>
                <p>Home Content</p>
                <ul>
                    <li>Navigation Bar</li>
                    <li>Comments</li>
                    <li>Limited Range</li>
                </ul>
            </div>
            <div>
                <p>About Us</p>
                <ul>
                    <li>Owner</li>
                    <li>Sponsors & Partners</li>
                    <li>Terms & Conditions</li>
                    <li>Licensing</li>
                </ul>
            </div>
            <div>
                <p>Products</p>
                <ul>
                    <li>All Products</li>
                    <li>Cart</li>
                </ul>                
            </div>
            <div>
                <p>Contact Us</p>
                <ul>
                    <li>Contact Form</li>
                    <div>
                        <li><img src="https://i.postimg.cc/t45rgL6L/icons8-phone-80.png" alt="" class="img-fluid"></li>
                        <li><img src="https://i.postimg.cc/zG5t8JyC/icons8-send-80.png" alt="" class="img-fluid"></li>
                        <li><img src="https://i.postimg.cc/JhYPNZPx/icons8-twitterx-80.png" alt="" class="img-fluid"></li>
                        <li><img src="https://i.postimg.cc/CKxcnmHd/icons8-instagram-80.png" alt="" class="img-fluid"></li>
                    </div>
                </ul>
            </div>

        </div>
        <div class="copy">&copy;Waydin Jochem {{ new Date().getFullYear() }}</div>
        <p class="m-0">All rights reserved by NeglectedNPC.Ltd</p>
    </section>
</template>
<script>
export default {

}
</script>
<style scoped>
section {
 background: linear-gradient(purple, grey);
    margin-top: 20px;
    color: aliceblue;
    margin-bottom: 0    ;
    /* position: absolute;
    bottom: 0;
    width: 100%; */
}

div p {
text-decoration: underline;
}
ul {
    list-style: none;
}
ul div {
    display: grid;
    grid-template-columns: auto auto;
    gap: 0;
}

/* li{
    text-align: center;
} */
.sub-menu {
    display: grid;
    grid-template-columns: auto auto auto auto;
}
@media only screen and (max-width: 420px) {
    section{
        font-size: xx-small;
    }

}

</style>