
(function() {
    // 1. უსაფრთხოების შემოწმება - თუ უკვე ჩატვირთულია, თავიდან არ გაეშვას
    if (window.hasPDFNavigator) return;
    window.hasPDFNavigator = true;

    let currentIdx = -1;

    function navigate(forward) {
      
        const elements = Array.from(document.querySelectorAll('.textLayer > span'));
        
        if (elements.length === 0) {
            console.log("ტექსტური ელემენტები ვერ მოიძებნა.");
            return;
        }


        document.querySelectorAll('.highlighted').forEach(el => el.classList.remove('highlighted'));


        if (forward) {
            currentIdx = (currentIdx + 1) % elements.length;
        } else {
            currentIdx = (currentIdx <= 0) ? elements.length - 1 : currentIdx - 1;
        }


        const target = elements[currentIdx];
        target.classList.add('highlighted');
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        console.log("მონიშნულია ელემენტი:", currentIdx);
    }

    // 3. კლავიატურის მოსმენა
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            navigate(!e.shiftKey); // თუ Shift-ია, უკან ბრუნდება, თუ არა - წინ
        }
    });

    console.log("PDF Navigator წარმატებით გაეშვა!");
})();