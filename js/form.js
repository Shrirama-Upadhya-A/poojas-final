var oldValues = null;

$(document)
    .on("click", ".editButton", function() {

        var section = $(this).closest(".formSection");
        var otherSections = $(".formSection").not(section);
        var inputs = section.find("input");

        section
            .removeClass("readOnly");

        otherSections
            .addClass("disabled")
            .find('button').prop("disabled", true);

        oldValues = {};
        inputs
            .each(function() { oldValues[this.id] = $(this).val(); })
            .prop("disabled", false);
    })

.on("click", ".cancelButton", function(e) {

    var section = $(this).closest(".formSection");
    var otherSections = $(".formSection").not(section);
    var inputs = section.find("input");

    section
        .addClass("readOnly");

    otherSections
        .removeClass("disabled");

    $('button').prop("disabled", false);

    inputs
        .each(function() { $(this).val(oldValues[this.id]); })
        .prop("disabled", true)

    e.stopPropagation();
    e.preventDefault();
});


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});