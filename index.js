const formatNumber = (numberToFormat = 0, separator = ".") => {
  return numberToFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

module.exports = formatNumber;
