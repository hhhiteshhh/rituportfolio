import React from "react";

function MSTeams() {
  return (
    <div className="flex mx-auto px-3 items-center justify-center flex-col leading-8 py-5 bg-[#1a1a1d] text-white md:text-xl">
      <h1 className="my-5 text-lg md:text-4xl">
        /Lets schedule a call on MS Teams/
      </h1>
      Step 1: Select “Schedule a Meeting” (calendar icon) below the compose box.
      <br />
      <br />
      Step 2: Go to “Calendar” on the left pane and click on “New meeting,”
      which is located at the top right.
      <br />
      <br />
      Step 3: Once you’ve selected a time range in the calendar, a form will
      open to help you out.
      <br />
      <br />
      Step 4: Add a title for the meeting, invite participants and add other
      details. The Scheduling Assistant can help you check everyone’s
      availability.
      <br />
      <br />
      Step 5: Hit “Save” to complete the process. An invite will automatically
      be sent to each participant’s Outlook inbox!
      <br />
      <br />
    </div>
  );
}

export default MSTeams;
