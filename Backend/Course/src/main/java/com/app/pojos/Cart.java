package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

@Table(name = "cart_items")
public class Cart  extends BaseEntity{
	
	@ManyToOne
	@JoinColumn(name="course_id")
	private Product product;
	
	
	@ManyToOne
	@JoinColumn(name = "stud_id")
	private User student;
	
	//customer -> student
	
	
	
//	@Column(length = 20)
//	private int quantity; //removed



	@Override
	public String toString() {
		return "Cart [product=" + product + ", Student=" + student + "]";
	}
	
	

}
