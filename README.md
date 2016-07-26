# react-no-more-bind-this
Removes the redundnet use of bind this when using React.

Every React developer encountered at least once with a bug that his on click event does nothing,
just to find out that he forgot to do :
this.clickHandler = this.clickHandler.bind(this);

So I decided to get rid of the need of this line, and makes the developing more easy going.

Inorder to do so, all you need to do is: 
instead of use the extends React.Component, just use an alternative class : BaseComponent.
And you will not need to use this.handler = this.handler.bind(this);

This change is not perforance issue, due to the fact that it happens once the component is loading.
