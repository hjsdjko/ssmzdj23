package com.entity.view;

import com.entity.XiaoshuozhangjieEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 小说章节
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-03-13 11:26:32
 */
@TableName("xiaoshuozhangjie")
public class XiaoshuozhangjieView  extends XiaoshuozhangjieEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public XiaoshuozhangjieView(){
	}
 
 	public XiaoshuozhangjieView(XiaoshuozhangjieEntity xiaoshuozhangjieEntity){
 	try {
			BeanUtils.copyProperties(this, xiaoshuozhangjieEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
