function showLoadingModal() {
    $("body").prepend(`<div id="loading-modal" class="loading-modal">
        <div class="loading-spinner"></div>
    </div>`)
}
function hideLoadingModal() {
    $('#loading-modal').remove();
}