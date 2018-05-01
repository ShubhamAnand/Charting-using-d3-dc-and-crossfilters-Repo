<script>
(function() {
  var form,form1,form2;
  form=document.querySelector('#wffmea21d8a1413748149e154c7b0519f150'); //selector of form
  
console.log(form);
  var fields = {};
  var enterField = function(name) {
    fields[name] = new Date().getTime();
  }
  
  var leaveField = function(e) {
    var timeSpent;
    var fieldName = e.target.name;
    var leaveType = e.type;
    if (fields.hasOwnProperty(fieldName)) {
      timeSpent = new Date().getTime() - fields[fieldName];
      if (timeSpent > 0 && timeSpent < 1800000) {
        window.dataLayer.push({
          'event' : 'fieldTiming',
          'timingCategory' : 'Comment Form Field Timing',
          'timingVariable' : fieldName,
          'timingLabel' : leaveType,
          'timingValue' : timeSpent
        });
      }
      delete fields[fieldName];
    }
  }
  
  if (form) {
    form.addEventListener('focus', function(e) { enterField(e.target.name); }, true);
    form.addEventListener('blur', function(e) { leaveField(e); }, true);
    form.addEventListener('change', function(e) { leaveField(e); }, true);
  }
  
})();
</script>
