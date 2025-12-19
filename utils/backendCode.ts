
export const sqlContent = `-- Database: firstair_db
-- Version: 2.0 (REST Optimized)

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Table: users (Auth System)
CREATE TABLE IF NOT EXISTS \`users\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`username\` varchar(50) NOT NULL UNIQUE,
  \`password\` varchar(255) NOT NULL,
  \`role\` enum('admin', 'editor') DEFAULT 'editor',
  \`created_at\` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table: services
CREATE TABLE IF NOT EXISTS \`services\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`title_ar\` varchar(255) NOT NULL,
  \`title_en\` varchar(255) NOT NULL,
  \`description_ar\` text,
  \`description_en\` text,
  \`icon\` varchar(100),
  \`order_weight\` int(11) DEFAULT 0,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table: contact_inquiries
CREATE TABLE IF NOT EXISTS \`contact_inquiries\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`name\` varchar(100) NOT NULL,
  \`phone\` varchar(20) NOT NULL,
  \`service_type\` varchar(50),
  \`message\` text,
  \`is_read\` boolean DEFAULT false,
  \`created_at\` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;

export const phpRouter = `<?php
/**
 * Core Router - Entry Point (index.php)
 */
require_once 'config/database.php';
require_once 'controllers/ServiceController.php';

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

// Simple RESTful Route Dispatcher
if ($uri[2] === 'services') {
    $controller = new ServiceController($db);
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    
    switch ($requestMethod) {
        case 'GET':
            if (isset($uri[3])) $controller->getOne($uri[3]);
            else $controller->getAll();
            break;
        case 'POST':
            $controller->create();
            break;
    }
} else {
    http_response_code(404);
    echo json_encode(["message" => "Endpoint Not Found"]);
}
?>`;

export const phpController = `<?php
/**
 * Service Controller (REST Implementation)
 */
class ServiceController {
    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

    public function getAll() {
        $query = "SELECT * FROM services ORDER BY order_weight ASC";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(["success" => true, "data" => $results]);
    }

    public function create() {
        $data = json_decode(file_get_contents("php://input"));
        
        if(!empty($data->title_en)) {
            $query = "INSERT INTO services SET title_ar=:ar, title_en=:en";
            $stmt = $this->db->prepare($query);
            // Binding and execution logic...
            http_response_code(201);
            echo json_encode(["success" => true, "message" => "Created"]);
        }
    }
}
?>`;

export const jsFrontend = `/**
 * Optimized API Service for Frontend
 */
const API_BASE = 'https://api.firstair-sa.com/v1';

export const api = {
    async fetchServices() {
        try {
            const response = await fetch(\`\${API_BASE}/services\`);
            const json = await response.json();
            return json.success ? json.data : [];
        } catch (error) {
            console.error('API Error:', error);
            return [];
        }
    },

    async submitInquiry(formData) {
        return fetch(\`\${API_BASE}/contact\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then(res => res.json());
    }
};`;
