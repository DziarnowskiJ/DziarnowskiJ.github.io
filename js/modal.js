jQuery('#myModal1').on('hidden.bs.modal', function (e) {
  // do something...
  jQuery('#myModal1 video').attr("src", jQuery("#myModal1  video").attr("src"));
});
