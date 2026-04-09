const pptxgen = require('pptxgenjs');
const convertSlide = require('C:\\Users\\高有才\\.qoderwork\\skills\\pptx\\scripts\\slideConverter');

async function buildPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = '淘宝种草AI助手';
    pptx.title = '淘宝种草AI助手能力介绍与实施路线图';
    pptx.subject = 'P8对P9汇报';

    // Slide 1: 能力介绍
    console.log('Creating slide 1...');
    await convertSlide('C:\\Users\\高有才\\.qoderwork\\workspace\\mncv91pk7f82ff12\\slide1.html', pptx);

    // Slide 2: 时间计划
    console.log('Creating slide 2...');
    await convertSlide('C:\\Users\\高有才\\.qoderwork\\workspace\\mncv91pk7f82ff12\\slide2.html', pptx);

    // Save
    const outputPath = 'C:\\Users\\高有才\\.qoderwork\\workspace\\mncv91pk7f82ff12\\淘宝种草AI助手-能力介绍与实施路线图.pptx';
    await pptx.writeFile({ fileName: outputPath });
    console.log(`Presentation created successfully: ${outputPath}`);
}

buildPresentation().catch(err => {
    console.error('Error creating presentation:', err);
    process.exit(1);
});
