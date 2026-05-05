// Mock for swiper/react in Jest (swiper v11 is ESM-only, CRA Jest can't parse .mjs)
const React = require('react');

const Swiper = ({ children, ...props }) =>
  React.createElement('div', { 'data-testid': 'swiper', ...props }, children);

const SwiperSlide = ({ children, ...props }) =>
  React.createElement('div', { 'data-testid': 'swiper-slide', ...props }, children);

module.exports = { Swiper, SwiperSlide };
module.exports.Swiper = Swiper;
module.exports.SwiperSlide = SwiperSlide;
