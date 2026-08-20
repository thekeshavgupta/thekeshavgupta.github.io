import { Children, cloneElement, useEffect, useRef, useState, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css';

function Carousel({ children, label, trackRef, className = '' }) {
    const internalRef = useRef(null);
    const ref = trackRef || internalRef;
    const [canGoBack, setCanGoBack] = useState(false);
    const [canGoForward, setCanGoForward] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const items = Children.toArray(children);

    const updateControls = useCallback((updateActive = true) => {
        const track = ref.current;
        if (!track || !track.children || track.children.length === 0) return;

        const maxScroll = track.scrollWidth - track.clientWidth;
        setCanGoBack(track.scrollLeft > 10);
        setCanGoForward(maxScroll - track.scrollLeft > 10);

        if (updateActive) {
            const trackCenter = track.scrollLeft + track.clientWidth / 2;
            let closestIdx = 0;
            let minDistance = Infinity;

            for (let i = 0; i < items.length; i++) {
                const card = track.children[i];
                if (!card) continue;
                const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                const distance = Math.abs(cardCenter - trackCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIdx = i;
                }
            }
            setActiveIndex(closestIdx);
        }
    }, [items.length, ref]);

    useEffect(() => {
        const track = ref.current;
        if (!track) return undefined;

        updateControls(true);
        const handleScroll = () => updateControls(true);
        const handleResize = () => updateControls(true);

        track.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        return () => {
            track.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [updateControls, ref]);

    const move = (direction) => {
        const track = ref.current;
        if (!track || !track.children) return;
        const nextIndex = Math.min(Math.max(activeIndex + direction, 0), items.length - 1);
        const card = track.children[nextIndex];
        if (!card) return;
        
        const targetLeft = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
        track.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
    };

    const focusCard = (index) => {
        const track = ref.current;
        if (!track || !track.children) return;
        const card = track.children[index];
        if (!card) return;

        const targetLeft = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
        track.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
    };

    return (
        <div className="carousel-shell">
            <button
                className={`carousel-control carousel-control-prev ${!canGoBack ? 'hidden-control' : ''}`}
                type="button"
                onClick={() => move(-1)}
                disabled={!canGoBack}
                aria-label={`Previous ${label}`}
            >
                <FaChevronLeft aria-hidden="true" size={14} />
            </button>

            <div className="carousel-mask-container">
                <div className={`carousel-track ${className}`.trim()} ref={ref} aria-label={label}>
                    {items.map((item, index) => cloneElement(item, {
                        key: item.key || index,
                        className: `${item.props.className || ''} carousel-card ${index === activeIndex ? 'carousel-card-active' : 'carousel-card-inactive'}`.trim()
                    }))}
                </div>
            </div>

            <button
                className={`carousel-control carousel-control-next ${!canGoForward ? 'hidden-control' : ''}`}
                type="button"
                onClick={() => move(1)}
                disabled={!canGoForward}
                aria-label={`Next ${label}`}
            >
                <FaChevronRight aria-hidden="true" size={14} />
            </button>

            {items.length > 1 && (
                <div className="carousel-pagination" role="tablist" aria-label={`${label} pagination`}>
                    {items.map((item, index) => (
                        <button
                            key={item.key || index}
                            className={`carousel-pagination-bar ${index === activeIndex ? 'active' : ''}`}
                            type="button"
                            role="tab"
                            aria-selected={index === activeIndex}
                            aria-label={`Show ${label} ${index + 1}`}
                            onClick={() => focusCard(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Carousel;
