
export const sqlContent = `
-- Database: firstair_db

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- --------------------------------------------------------

-- Table structure for table 'settings'
CREATE TABLE \`settings\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`site_name_ar\` varchar(255) NOT NULL,
  \`site_name_en\` varchar(255) NOT NULL,
  \`phone\` varchar(20) NOT NULL,
  \`email\` varchar(255) NOT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table 'settings'
INSERT INTO \`settings\` (\`site_name_ar\`, \`site_name_en\`, \`phone\`, \`email\`) VALUES
('فرست اير للمقاولات', 'First Air Contracting', '+966532425777', 'info@firstair-sa.com');

-- Table structures for services, users, and articles continue...
-- Make sure any AR insertion uses 'فرست اير'
`;
// phpConfig, phpRead, phpLogin, jsFrontend follow the same logic...
export const phpConfig = `<?php ... ?>`;
export const phpRead = `<?php ... ?>`;
export const phpLogin = `<?php ... ?>`;
export const jsFrontend = `...`;
