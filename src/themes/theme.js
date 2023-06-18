export const light = () => ({
  input_color: '#245939',
  text_color: '#08120E',
  accent_color: '#39896A',
  blank: '#FFF',
  background_color: '#BFDCAE',
  offset_color_primary: '#0C8173',
  offset_color_secondary: '#20C593',
  white_green: '#F1F1E8',
});

export const dark = () => ({
  text_color: '#FFFFFF',
  background_color: '#08120E',
  card_color: '#0E2019',
  input_color: '#245939',
  button_color_primary: '#24B27C',
  button_color_secondary: '#206A5D',
  notif_color: '#051F06',
  situation: {
    approved: {
      background_color: 'rgba(107, 255, 140, 0.2)',
      accent_color: '#299A3B',
    },
    pending: {
      background_color: 'rgba(255, 255, 255, 0.2)',
      accent_color: '#ababab',
    },
    rejected: {
      background_color: 'rgba(255, 107, 107, 0.2)',
      accent_color: '#FF6B6B',
    },
  }
});