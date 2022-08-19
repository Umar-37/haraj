<script>
    let archive = 'ارشيف'
    let firstLine = 'ابحث عن الإعلانات المحذوفة'
    let secondLine = 'هذه الخدمة تجريبية وقد لاتعمل بشكل المطلوب'
    export let error=false
</script>
<div class="header">
    <nav class="mainNavbar">
        <div class="container">
            <div class=" headContent" style="margin-top:0 ;">
                <h1 style="color:white;margin-left:0.2rem">{archive}</h1>
                <div class="headLogo"><a class="logo" href="/"><img alt="حراج"
                            src="https://v8-cdn.haraj.com.sa/assets/images/haraj-logo.png" width="115" height="25"></a>
                </div>
            </div>
        </div>
    </nav>
    <noscript></noscript>
</div>
{#if error}
 <div class="random-help-message post_deleted" style="margin: 15px 10px; color: #f5453b;
    background: rgba(245, 69, 59, .1);
    border-color: #f5453b ">
    <p>{error}</p>
</div>
{:else}
     <!-- else content here -->
<div class="random-help-message post_deleted" style="margin: 15px 10px;">
    <p>{firstLine}<br>{secondLine}</p>
</div>
{/if}
<style>

.postWrapper .postMain .post_deleted {
    color: #f5453b;
    background: rgba(245, 69, 59, .1);
    border-color: #f5453b
}


</style>