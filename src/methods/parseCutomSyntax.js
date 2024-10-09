const parseCustomSyntax = (text) => {
    // Replace **bold** with <strong>bold</strong>
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Replace *italic* with <em>italic</em>
    text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Replace # Heading with <h1>Heading</h1>
    text = text.replace(/(^|\n)# (.+?)(\n|$)/g, '<h1 class="text-2xl font-medium my-2">$2</h1>');

    // Replace unordered lists
    text = text.replace(/(^|\n)(-|\*)\s(.+?)(\n|$)/gm, (match, p1, p2, p3) => {
        // This part handles simple unordered lists
        return p1 + '<ul class="ps-5 mt-2 space-y-1 list-disc "><li >' + p3.replace(/(\n\s{2,}[-*]\s)/g, '</li><li>').replace(/<\/li>\s*<\/li>/g, '</li>') + '</li></ul>';
    });

    // Replace ordered lists
    text = text.replace(/(^|\n)(\d+)\.\s(.+?)(\n|$)/gm, (match, p1, p2, p3) => {
        // This part handles simple ordered lists
        return p1 + '<ol><li class="ps-5 mt-2 space-y-1 list list-inside">' + p3.replace(/(\n\s{2,}\d+\.\s)/g, '</li><li>').replace(/<\/li>\s*<\/li>/g, '</li>') + '</li></ol>';
    });

    
    // Replace [link](url) with <a href="url">link</a>

    // Replace ![image](url) with <img src="url" alt="image">

    // Replace `code` with <code>code</code>

    // Replace ```code block``` with <pre><code>code block</code></pre>

    // Replace --- with <hr>
    text = text.replace(/---/g, '<hr class="h-px my-8 bg-gray-200 border-0">');


    // Replace > blockquote with <blockquote>blockquote</blockquote>

    // Replace <br> with <br />

    // Replace \n with <br />

    // Replace \t with &nbsp;&nbsp;&nbsp;&nbsp;

    // Replace & with &amp;

    // Replace < with &lt;

    // Replace > with &gt;

    // Replace " with &quot;

    // Replace ' with &#039;

    // Replace \ with \\

    // Replace remaining text to <p>text</p>
    
    // Add more rules as needed

    
    return text;
};

export default parseCustomSyntax;