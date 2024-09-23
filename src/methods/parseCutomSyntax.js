const parseCustomSyntax = (text) => {
    // Replace **bold** with <strong>bold</strong>
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Replace *italic* with <em>italic</em>
    text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Replace # Heading with <h1>Heading</h1>
    text = text.replace(/(^|\n)# (.+?)(\n|$)/g, '<h1 class="text-2xl font-medium">$2</h1>');

    // Replace unordered lists
    text = text.replace(/(^|\n)(-|\*)\s(.+?)(\n|$)/gm, (match, p1, p2, p3) => {
        // This part handles simple unordered lists
        return p1 + '<ul><li class="ps-5 mt-2 space-y-1 list-disc list-inside">' + p3.replace(/(\n\s{2,}[-*]\s)/g, '</li><li>').replace(/<\/li>\s*<\/li>/g, '</li>') + '</li></ul>';
    });

    // Replace ordered lists
    text = text.replace(/(^|\n)(\d+)\.\s(.+?)(\n|$)/gm, (match, p1, p2, p3) => {
        // This part handles simple ordered lists
        return p1 + '<ol><li class="ps-5 mt-2 space-y-1 list list-inside">' + p3.replace(/(\n\s{2,}\d+\.\s)/g, '</li><li>').replace(/<\/li>\s*<\/li>/g, '</li>') + '</li></ol>';
    });

    // Add more rules as needed

    return text;
};

export default parseCustomSyntax;