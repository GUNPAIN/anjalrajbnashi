// Smooth scroll animation
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
<script>
function openGallery() {
  document.getElementById("gallery").classList.toggle("active");
}
</script>