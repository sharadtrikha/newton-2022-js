Whenever Child div is clicked (OR basically any event is fired),
then, only callback function of child div should be invoked ?
OR 
All the html elements (who are in hierarchy w.r.t child div) ->
For these html elements, onclick callback function should run 
(ONLY when callback function is registered on them via addEventListener)


Second approach got finalized.

Now, question was -> 
how to implement the flow ?

i.e.
Whether callback function of child should be called first, then,
callback function of parent should be called,
callback function of grand parent should be called

OR  (opposite flow)

Whether callback function of grand parent should be called first, then,
callback function of parent should be called,
callback function of child should be called

----> 

It was decided that lets keep both the flows.
First flow was named as -> BUBBLE
second flow was named as -> CAPTURE


Event bubble -> 
bubble means it goes UP. (i.e. from where it HAPPENNED till last html element)

Event Capture 
Capture means it goes DOWN (ie. from First HTML Element w.r.t Hierarchy till the 
point where it HAPPENNED).


By default, Event Bubble technique is applied.
In order to change the strategy to capture ->
we use supply third argument to addEventListener method as true.


We need to remember that FLOW always goes from TOP to Target first,
then, it traverses back from TARGET to TOP.

i.e. each DOM element is given 2 chances to execute their callback function -
either during capture phase or During bubble phase

Incase, we want to stop propagation of Events, we can use stopPropagation() method
of event object.