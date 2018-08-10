package ru.mail.mina.repository.impl;


import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import ru.mail.mina.repository.dao.UserGenericHibernateDao;
import ru.mail.mina.repository.model.User;


import javax.persistence.Query;



/**
 * Created by Администратор on 13.07.2017.
 */

@Repository("userDao")
public class UserGenericHibernateDaoImpl extends GenericHibernateDaoImpl<User, Integer> implements UserGenericHibernateDao {

    /**
    Initializing superClass with the type User
     */
    public UserGenericHibernateDaoImpl() {
        super(User.class);
    }


    @Override
    public User getUserByAd(Integer adId) {
        User user = null;
        try {
            String hql = "SELECT ad.user from Ad ad WHERE ad.id=:adId ";
            Query query =  getSession().createQuery(hql);

            query.setParameter("adId", adId);
            user = (User) query.getResultList().get(0);
        } catch (Exception e) {
        }
        return user;
    }

    @Override
    @Transactional
    public User getByUserName(String username) {
        User user = null;
        try {
            String hql = "From User  u where u.username=:username";
            Query query =  getSession().createQuery(hql);
            query.setParameter("username", username);
            user = (User) query.getResultList().get(0);
        } catch (Exception e) {
            return user;
        }

        return user;
    }
}
