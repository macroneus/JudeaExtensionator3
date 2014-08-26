walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bWest Bank\b/g, "Judea and Samaria");
	v = v.replace(/\bWest bank\b/g, "Judea and Samaria");
	v = v.replace(/\bwest Bank\b/g, "Judea and Samaria");
	v = v.replace(/\bwest bank\b/g, "Judea and Samaria");
	v = v.replace(/\bThe West Bank\b/g, "Judea and Samaria");
	v = v.replace(/\bThe West bank\b/g, "Judea and Samaria");
	v = v.replace(/\bThe west Bank\b/g, "Judea and Samaria");
	v = v.replace(/\bThe west bank\b/g, "Judea and Samaria");
	v = v.replace(/\bthe Bank\b/g, "Judea and Samaria");
	v = v.replace(/\bthe West bank\b/g, "Judea and Samaria");
	v = v.replace(/\bthe west Bank\b/g, "Judea and Samaria");
	v = v.replace(/\bthe west bank\b/g, "Judea and Samaria");

	
	textNode.nodeValue = v;
}


