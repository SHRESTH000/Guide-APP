package com.guide.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.guide.model.Role;

@Repository
public interface RoleDao extends JpaRepository<Role,Long> {

}
