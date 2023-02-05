export default function handlePreviewPage(target) {
    return new Promise(() => {
        console.log('forwarding print preview request...');
    
        let data = target.contentWindow.document.documentElement.outerHTML;
        //console.log(data);
        let blob = new Blob([data], { type: 'text/html' });
        let url = URL.createObjectURL(blob);
    
        window.electronAPI.previewPageComponent(url, (response) => {
         console.log('Main: ', response);
        });
        //console.log('Main: ', data);
    });
}