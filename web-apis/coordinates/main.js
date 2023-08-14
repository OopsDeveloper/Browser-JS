/* layout paint composition */

const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;


    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        console.log(`${x} ${y}`);
        console.log(targetRect)
        console.log(`${targetRect.width} ${targetRect.height}`);
        console.log(`${targetHalfWidth} ${targetHalfHeight}`);

        /* 이렇게 left랑 top을 이용하면 layout까지 바뀌어서 안좋음 */
        // vertical.style.left = `${x}px`;
        // horizontal.style.top = `${y}px`;
        // target.style.left = `${x}px`;
        // target.style.top = `${y}px`;
        // tag.style.left = `${x}px`;
        // tag.style.top = `${y}px`;
        // tag.innerHTML = `${x}px, ${y}px`;

        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
        target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
        tag.style.transform = `translate(${x}px, ${y}px)`;
        tag.innerHTML = `${x}px, ${y}px`;
    });
});