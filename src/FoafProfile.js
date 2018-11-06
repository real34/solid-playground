import React, { useState, useEffect } from "react";
import $rdf from "rdflib";

const FOAF = $rdf.Namespace("http://xmlns.com/foaf/0.1/");

const FoafProfile = ({ person }) => {
  const [store, setStore] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(
    () => {
      setLoading(true);
      if (person.trim() === "") return;

      console.log(person.trim());
      const store = $rdf.graph();
      const fetcher = new $rdf.Fetcher(store);

      fetcher.load(person).then(() => {
        setStore(store);
        setLoading(false);
      });
    },
    [person]
  );

  return loading ? (
    `Loading profile ${person}…`
  ) : (
    <div>
      <h3>Profile information</h3>
      <a href={person}>Open profile</a>
      <dl id="viewer">
        <dt>Full name</dt>
        <dd>
          <FoafName store={store} person={person} />
        </dd>

        <dt>Friends</dt>
        <dd>
          <FoafFriends store={store} person={person} />
        </dd>
      </dl>
    </div>
  );
};

const FoafName = ({ store, person }) => {
  const fullName = store.any($rdf.sym(person), FOAF("name"));
  return fullName && fullName.value;
};

const FoafFriends = ({ store, person }) => {
  const friends = store.each($rdf.sym(person), FOAF("knows"));
  console.log({ friends });
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend}>{JSON.stringify(friend, null, 2)}</li>
      ))}
    </ul>
  );
};
/*
$("#view").click(async function loadProfile() {
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
*/

export default FoafProfile;
