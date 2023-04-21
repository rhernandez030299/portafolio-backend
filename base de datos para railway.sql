CREATE TABLE IF NOT EXISTS `rol` (
  `idrol` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idrol`)
);


INSERT INTO `rol` (`idrol`, `nombre`, `createdAt`, `updatedAt`) VALUES
	(1, 'Administrador', NULL, NULL),
	(2, 'Programador', NULL, NULL);

  CREATE TABLE IF NOT EXISTS `usuario` (
  `idusuario` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `estado` tinyint(3) unsigned NOT NULL DEFAULT 1 COMMENT '//1: activo, 0: inactivo',
  `edad` int(10) unsigned DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `idrol` bigint(20) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idusuario`),
  KEY `email` (`email`),
  KEY `contrasenia` (`contrasenia`),
  KEY `idrol` (`idrol`),
  CONSTRAINT `usuario_idrol_foreign` FOREIGN KEY (`idrol`) REFERENCES `rol` (`idrol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `usuario` (`idusuario`, `nombre`, `email`, `contrasenia`, `foto`, `estado`, `edad`, `descripcion`, `idrol`, `createdAt`, `updatedAt`) VALUES
	(26, 'ronald', '', '', '43845a85-04d8-4d46-9e94-fa9295f9b960.jpeg', 1, NULL, NULL, 1, '2023-03-29 02:07:33', '2023-03-29 02:07:33'),
	(28, 'adasd12', 'rdhernande@gmail.co33', '$2a$10$Bq0BQLG7MiguzJFcEXWMgepJAlbw.9dQ5c90Rw/7wLZoWm7yY836a', '90cd7426-e4bf-481a-bd25-5828aedd81bb.jpeg', 1, 1, '123123123', 1, '2023-03-29 02:21:45', '2023-04-21 22:11:02'),
	(29, 'ronald', 'ronald@gmail.com', '$2a$10$jXrJNM9/tTD6IGkz5nVOlu.xfww3ckrsSn7aO1niA6a0Mp40abETi', '', 1, 1, '121212', 1, '2023-04-12 01:39:44', '2023-04-12 01:39:44');

CREATE TABLE IF NOT EXISTS `red` (
  `idred` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `icono` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idred`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `red` (`idred`, `nombre`, `icono`, `createdAt`, `updatedAt`) VALUES
	(1, 'Facebook', 'icono-facebook', NULL, NULL),
	(2, 'Twitter', 'icono-twitter', NULL, NULL),
	(3, 'Youtube', 'icono-youtube', NULL, NULL);

CREATE TABLE IF NOT EXISTS `usuario_red` (
  `idusuario_red` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `idusuario` bigint(20) unsigned NOT NULL,
  `idred` bigint(20) unsigned NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idusuario_red`),
  KEY `idusuario` (`idusuario`),
  KEY `idred` (`idred`),
  CONSTRAINT `usuario_red_idred_foreign` FOREIGN KEY (`idred`) REFERENCES `red` (`idred`),
  CONSTRAINT `usuario_red_idusuario_foreign` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `habilidad` (
  `idhabilidad` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idhabilidad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `experiencia_laboral` (
  `idexperiencia_laboral` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `idusuario` bigint(20) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idexperiencia_laboral`),
  KEY `idusuario` (`idusuario`),
  CONSTRAINT `experiencia_laboral_idusuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `proyecto` (
  `idproyecto` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `idusuario` bigint(20) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idproyecto`),
  KEY `idusuario` (`idusuario`),
  CONSTRAINT `proyecto_idusuario_foreign` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `contactenos` (
  `idcontactenos` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '',
  `correo` varchar(50) DEFAULT '',
  `telefono` varchar(50) DEFAULT '',
  `asunto` varchar(50) DEFAULT '',
  `descripcion` varchar(255) DEFAULT '',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idcontactenos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `conocimiento` (
  `idconocimiento` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `porcentaje` int(11) DEFAULT 0,
  `idhabilidad` bigint(20) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idconocimiento`),
  KEY `idhabilidad` (`idhabilidad`),
  CONSTRAINT `conocimiento_idhabilidad_foreign` FOREIGN KEY (`idhabilidad`) REFERENCES `habilidad` (`idhabilidad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;