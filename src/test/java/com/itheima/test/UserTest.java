package com.itheima.test;

import com.itheima.domain.User;
import com.itheima.service.IUserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/**
 * 用户的业务层测试
 */
@RunWith(SpringRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class UserTest {
    @Autowired
    private IUserService userService;

    @Test
    public void testFindAll() {
        List<User> users = userService.findAll();
        System.out.println(users);
    }

    @Test
    public void testFindOne() {
        User user = userService.findById(1);
        System.out.println(user);
    }

    @Test
    public void testUpdate() {
        User user = userService.findById(1);
        System.out.println("修改前:" + user);
        user.setAge(55);
        userService.updateUser(user);
        user = userService.findById(1);
        System.out.println("修改后:" + user);
    }

    @Test
    public void testDelete() {
        userService.deleteUser(8);
    }
}
