package com.entity.view;

import com.entity.DiscussshuchengEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 书城评论表
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-03-13 11:26:32
 */
@TableName("discussshucheng")
public class DiscussshuchengView  extends DiscussshuchengEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DiscussshuchengView(){
	}
 
 	public DiscussshuchengView(DiscussshuchengEntity discussshuchengEntity){
 	try {
			BeanUtils.copyProperties(this, discussshuchengEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
