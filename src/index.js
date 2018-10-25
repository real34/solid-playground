import $ from "jquery";
import auth from "solid-auth-client";
import $rdf from "rdflib";

$("#logout").hide();

const popupUri = "popup.html";
$("#login button").click(() => auth.popupLogin({ popupUri }));
$("#logout button").click(() => auth.logout());

auth.trackSession(session => {
  console.log({ session });
  const loggedIn = !!session;

  $("#login").toggle(!loggedIn);
  $(".logout").toggle(loggedIn);

  if (session) {
    $("#user").text(session.webId);
    if (!$("#profile").val()) {
      $("#profile").val(session.webId);
    }
  }
});

const FOAF = $rdf.Namespace("http://xmlns.com/foaf/0.1/");
$("#view").click(async function loadProfile() {
  // Set up a local data store and associated data fetcher
  const store = $rdf.graph();
  const fetcher = new $rdf.Fetcher(store);

  // Load the person's data into the store
  const person = $("#profile").val();
  await fetcher.load(person);

  // Display their details
  const fullName = store.any($rdf.sym(person), FOAF("name"));
  $("#fullName").text(fullName && fullName.value);

  const friends = store.each($rdf.sym(person), FOAF("knows"));
  $("#friends").empty();
  friends.forEach(async friend => {
    await fetcher.load(friend);
    const fullName = store.any(friend, FOAF("name"));
    console.log({ fullName, friend });
    $("#friends").append(
      $("<li>").append(
        $("<a>")
          .attr("href", "#")
          .text((fullName && fullName.value) || friend.value)
          .click(() => $("#profile").val(friend.value))
          .click(loadProfile)
      )
    );
  });
});
