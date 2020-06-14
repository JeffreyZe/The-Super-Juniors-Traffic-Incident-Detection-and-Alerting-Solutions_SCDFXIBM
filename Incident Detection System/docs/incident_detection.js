/**
 * Web application
 */
const apiUrl ="https://7033d6a1.us-south.apigw.appdomain.cloud/traffic_incident";
const traffic_incident = {
  // retrieve the existing guestbook entries
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/entries`,
      dataType: 'json'
    });
  },
};

(function() {

  let entriesTemplate;

  function prepareTemplates() {
    entriesTemplate = Handlebars.compile($('#entries-template').html());
  }

  // retrieve entries and update the UI
  function loadEntries() {
    console.log('Loading entries...');
    $('#entries').html('Loading entries...');
    traffic_incident.get().done(function(result) {
      if (!result.entries) {
        return;
      }

      const context = {
        entries: result.entries
      }
      $('#entries').html(entriesTemplate(context));
    }).error(function(error) {
      $('#entries').html('No entries');
      console.log(error);
    });
  }

  $(document).ready(function() {
    prepareTemplates();
    loadEntries();
  });
})();


function dismiss(ele){
  $(ele).parent().hide(1000);
}

function accelerate(ele){
  alert("The accident has been accelerated to the Operations Centre for immediate action.");
  $(ele).html("Processing");
  $(ele).removeClass("btn btn-danger");
  $(ele).addClass('btn btn-warning');
  
}